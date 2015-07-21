options( digits = 16 )
library( jsonlite )

a = -4
b = 4
x = c( -5, -2.5, 0, 2.5, 5 )
y = punif( x, a,b )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
