import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Authentication & User Management API",
            description: "API documentation for CRUD application with authentication",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3001",
                description: "Development server",
            },
        ],
        components: {
            schemas: {
                User: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            description: "User name",
                        },
                        email: {
                            type: "string",
                            description: "User email",
                        },
                        password: {
                            type: "string",
                            description: "User password",
                        },
                        age: {
                            type: "number",
                            description: "User age",
                        },
                        role: {
                            type: "string",
                            enum: ["user", "admin"],
                            description: "User role",
                        },
                    },
                },
                Project: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            description: "Project name",
                        },
                        description: {
                            type: "string",
                            description: "Project description",
                        },
                        status: {
                            type: "string",
                            enum: ["pending", "in-progress", "completed"],
                            description: "Project status",
                        },
                        startDate: {
                            type: "string",
                            format: "date",
                            description: "Project start date",
                        },
                        owner: {
                            type: "string",
                            description: "User ID of project owner",
                        },
                    },
                },
            },
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
