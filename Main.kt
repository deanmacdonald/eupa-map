// Main.kt
fun fetchData(): Result {
    return try {
        // Simulate fetching data
        val data = "Fetched data successfully"
        Result.Success(data)
    } catch (e: Exception) {
        Result.Error(e)
    }
}

fun main() {
    val result = fetchData()
    handleResult(result)
}
