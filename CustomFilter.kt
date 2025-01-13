// CustomFilter.kt
fun <T> List<T>.customFilter(predicate: (T) -> Boolean): List<T> {
    val result = mutableListOf<T>()
    for (item in this) {
        if (predicate(item)) {
            result.add(item)
        }
    }
    return result
}

fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val evenNumbers = numbers.customFilter { it % 2 == 0 }
    println(evenNumbers) // Output: [2, 4]
}
