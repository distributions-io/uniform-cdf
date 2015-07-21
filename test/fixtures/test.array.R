options( digits = 16 )
library( jsonlite )

a = -400
b = 400
x = seq( -1000, 1000, 0.5 )
y = punif( x, a,b )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
