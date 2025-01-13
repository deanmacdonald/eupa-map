plugins {
    kotlin("jvm") version "1.8.0"
    id("org.springframework.boot") version "2.5.6"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    id("com.github.johnrengelman.shadow") version "7.0.0"
    id("com.diffplug.spotless") version "5.14.3"
    id("io.gitlab.arturbosch.detekt") version "1.18.1"
    id("jacoco")
    id("com.google.protobuf") version "0.8.17"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(libs.guava)
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.springframework.boot:spring-boot-starter")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

testing {
    suites {
        val test by getting(JvmTestSuite::class) {
            useKotlinTest("2.0.21")
        }
    }
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

// Correct the application block with proper syntax
application {
    mainClass.set("org.example.AppKt")
}

spotless {
    kotlin {
        target("**/*.kt") 
        ktlint("0.41.0")
    }
}

detekt {
    toolVersion = "1.18.1"
    source = files("src/main/kotlin") 
    config = files("detekt-config.yml")
}

jacoco {
    toolVersion = "0.8.7"
}
