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
	
	println(data)


 }




