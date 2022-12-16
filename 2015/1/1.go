// go run 1.go to run file

package main

import (
	"os"
)
 
 func main() {
	dat, err := os.ReadFile("data.txt")
	if err != nil {
		panic(err)
	}
	data := string(dat)
	

	floor := 0
	enteredBasement := false
	enteredAt :=0


	for i := 0; i < len(data); i++ {
		if data[i] == '('{
			floor ++
		}
		if data[i] == ')'{
			floor --
		}
		if floor < 0 && !enteredBasement {

			enteredBasement = !enteredBasement
			enteredAt = i + 1
		}
	}

	println(floor)
	println(enteredAt)

 }

