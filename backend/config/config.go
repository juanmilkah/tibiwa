package config

import "os"

type Config struct {
	Env string
}

func LoadConfig() *Config {
	env := getEnvironment("ENV", "development")

	return &Config{Env: env}
}

func getEnvironment(key, defaultValue string) string {
	env := os.Getenv(key)

	if env == "" {
		return defaultValue
	}

	return env
}
