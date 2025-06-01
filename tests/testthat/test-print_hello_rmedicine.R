test_that("print_hello_rmedicine prints hello rmedicine", {
  expect_equal(
    print_hello_rmedicine(x = "test"),
    "Hello, R/Medicine!"
  )
})
