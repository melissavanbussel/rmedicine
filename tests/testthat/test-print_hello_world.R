test_that("print_hello_world prints hello world", {
  expect_equal(
    print_hello_world(x = "test"),
    "Hello, world!"
  )
})
