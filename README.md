## Ejemplo

```
  <ProductCard              product={ product }
              className="bg-dark text-white"
              initialValues={{
                  count: 6,
                  maxCount: 10,
              }}
          >
              {
                  ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                      <>
                          <ProductImage  />
                          <ProductTitle  />
                          <ProductButtons  />
                      </>
                  )
              }
          </ProductCard>
          ยดยดยด

