options( digits = 16 )
library( jsonlite )

a = 0
b = 25
x = 0:24
y = punif( x, a,b )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
