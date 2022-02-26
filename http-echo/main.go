package main

import (
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
			r := setupRouter()
			r.Run() // listen and serve on 0.0.0.0:8080
		},
	}
)

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.SetTrustedProxies(nil)
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
