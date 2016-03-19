package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
    r.StaticFS("/assets/", http.Dir("assets"))
    r.LoadHTMLGlob("templates/*.tmpl")

    r.GET("/", func(c *gin.Context) {
        c.HTML(http.StatusOK, "index.tmpl", nil)
    })

    r.StaticFS("/waveform", http.Dir("digital-waveform"))
    r.StaticFS("/listuals", http.Dir("listuals"))

    r.Run(":8080")
}
