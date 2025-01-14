plugins {
    kotlin("jvm") version "1.8.21"
    id("org.springframework.boot") version "3.1.0"
    id("io.spring.dependency-management") version "1.1.0"
    id("com.github.johnrengelman.shadow") version "8.0.0"
    id("io.gitlab.arturbosch.detekt") version "1.23.0"
    id("jacoco")
    id("com.google.protobuf") version "0.9.0"
    application
}

repositories {
    mavenCentral()
}

val guavaVersion = "31.1-jre"
val protobufVersion = "3.21.6"

dependencies {
    implementation("com.google.guava:guava:$guavaVersion")
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.springframework.boot:spring-boot-starter")
    implementation("com.google.protobuf:protobuf-java:$protobufVersion")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

testing {
    suites {
        val test by getting(JvmTestSuite::class) {
            useKotlinTest()
        }
    }
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}

application {
    mainClass.set("org.example.AppKt")
}

detekt {
    toolVersion = "1.23.0"
    source = files("src/main/kotlin")
    config = files("detekt-config.yml")
}

jacoco {
    toolVersion = "0.8.7"
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:$protobufVersion"
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

tasks.register("exampleTask") {
    doLast {
        tasks.forEach { task ->
            println("Executing task: ${task.name}")
        }
    }
}
