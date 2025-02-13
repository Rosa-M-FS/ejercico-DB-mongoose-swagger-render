const { response } = require("express");
const { schema } = require("../models/Task");

module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Tasks: "Create a task",
          },
          description: "Create a new task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
    },

    "/":{
      get:{
        tags:{
          Tasks:"Get all tasks"
        },
        description:"Get all tasks",
        operationId:"getTasks",
        response:{
          200: {
            description:"list of tasks",
            content:{
              "application/json":{
                schema:{
                  type:"array",
                  items:{
                    $ref:"#/components/schemas/Task"
                  }
                }
              }
            }
          },
          500:{
            description:"Server error"
          }
        }
        },
      },
      "/id/{_id}":{
        get:{
          tags:{
            Tasks:"Get tasks by id"
          },
          description:"Get tasks by id",
          operationId:"getTasksById",
          parameters:[
            {
              name:"_id",
              in:"path",
              required:true,
              description:"Task id",
              schema:{
                type:"string"
              }
            }
          ],
          response:{
            200: {
              description:"Task found",
              content:{
                "application/json":{
                  schema:{
                    items:{
                      $ref:"#/components/schemas/Task"
                    }
                  }
                }
              }
            },
            400:{
              description:"Task not found"
            },
            500:{
              description:"Server error"
            }
          }
          },
        },
        "/id/{_id}":{
          get:{
            tags:{
              Tasks:"Get tasks by id"
            },
            description:"Get tasks by id",
            operationId:"getTasksById",
            parameters:[
              {
                name:"_id",
                in:"path",
                required:true,
                description:"Task id",
                schema:{
                  type:"string"
                }
              }
            ],
            response:{
              200: {
                description:"Task found",
                content:{
                  "application/json":{
                    schema:{
                      items:{
                        $ref:"#/components/schemas/Task"
                      }
                    }
                  }
                }
              },
              400:{
                description:"Task not found"
              },
              500:{
                description:"Server error"
              }
            }
            },

            put:{
              tags:{
                Tasks:"Update the title of the task by id"
              },
              description:"Update the title of the task by id",
              operationId:"updateTasksTitle",
              parameters:[
                {
                  name:"_id",
                  in:"path",
                  required:true,
                  description:"Task id",
                  schema:{
                    type:"string"
                  }
                }
              ],
              requestBody:{
                content:{
                  "aplication/json":{
                    schema:{
                      type:"object",
                      properties:{
                        title:{
                          type:"string"
                        }
                      }
                    }
                  }
                }
              },
              response:{
                200: {
                  description:"Task updated",   
                },
                400:{
                  description:"Bad request"
                },
                500:{
                  description:"Server error"
                }
              }
            },
            delete:{
              tags:{
                Tasks:"Delete tasks by id"
              },
              description:"Delete tasks by id",
              operationId:"deleteTasksById",
              parameters:[
                {
                  name:"_id",
                  in:"path",
                  required:true,
                  description:"Task id",
                  schema:{
                    type:"string"
                  }
                }
              ],
              response:{
                200: {
                  description:"Task found"
                },
                400:{
                  description:"Task not found"
                },
                500:{
                  description:"Server error"
                }
              }
            } 
          },
        "/id/{_id}/markAsCompleted":{
            put:{
            tags:{
              Tasks:"Mark tasks as completed"
            },
            description:"Mark tasks as completed",
            operationId:"markTaskAsCompleted",
            parameters:[
              {
                name:"_id",
                in:"path",
                required:true,
                description:"Task id",
                schema:{
                  type:"string"
                }
              }
            ],
            response:{
              200: {
                description:"Task marked as completed"
              },
              400:{
                description:"Task not found"
              },
              500:{
                description:"Server error"
              }
            }
          }
        }
      }
  