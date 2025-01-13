// User.kt
import kotlin.properties.Delegates

class User {
    var name: String by Delegates.observable("<no name>") { prop, old, new ->
        println("$old -> $new")
    }
}

fun main() {
    val user = User()
    user.name = "Alice" // Output: <no name> -> Alice
    user.name = "Bob"   // Output: Alice -> Bob
}
