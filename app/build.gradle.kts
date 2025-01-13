plugins {
    kotlin("jvm") version "1.8.0"
    id("org.springframework.boot") version "2.5.6"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    id("com.github.johnrengelman.shadow") version "7.0.0"
    // id("com.diffplug.spotless") version "5.14.3" // Comment out for now
    id("io.gitlab.arturbosch.detekt") version "1.18.1"
    id("jacoco")
    id("com.google.protobuf") version "0.8.17" // Ensure consistency
    id("application")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(libs.guava)
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.springframework.boot:spring-boot-starter")
    implementation("com.google.protobuf:protobuf-java:3.17.3")
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
        languageVersion.set(JavaLanguageVersion.of(17)) // Use supported version
    }
}

application {
    mainClass.set("org.example.AppKt")
}

detekt {
    toolVersion = "1.18.1"
    source = files("src/main/kotlin")
    config = files("detekt-config.yml")
}

jacoco {
    toolVersion = "0.8.7"
}

// Ensure consistent protobuf configuration
protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:3.17.3"
    }
    generateProtoTasks {
        all().forEach { task ->
            task.builtins {
                create("java") {
                    option("lite")
                }
            }
        }
    }
}

// Temporarily exclude Spotless
// spotless {
//    kotlin {
//       target("**/*.kt")
//       ktlint("0.41.0")
//    }
// }
