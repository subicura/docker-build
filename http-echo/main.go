package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/spf13/cobra"
)

var (
	// Used for flags.
	echoText string

	rootCmd = &cobra.Command{
		Use:   "http-echo",
		Short: "http-echo is a simple echo web server",
		Long:  "A Simple Echo Web Server",
		Run: func(cmd *cobra.Command, args []string) {
			gin.SetMode(gin.ReleaseMode)
			r := setupRouter()
			fmt.Println("Listening and serving HTTP on :8080")
			r.Run() // listen and serve on 0.0.0.0:8080
		},
	}
)

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.SetTrustedProxies(nil)
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.GET("/*all", func(c *gin.Context) {
		c.String(http.StatusOK, "%s", echoText)
	})
	return r
}

func main() {
	rootCmd.PersistentFlags().StringVar(&echoText, "text", "", "echo text")
	rootCmd.MarkPersistentFlagRequired("text")
	rootCmd.Execute()
}
