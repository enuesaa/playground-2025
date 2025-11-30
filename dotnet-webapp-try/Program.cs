var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
var todos = new List<Todo> {
    new Todo(1, "Buy milk", false),
};

app.MapGet("/", () => "Hello World!");
app.MapGet("/todos", () => todos);

app.Run();

record Todo(int Id, string Title, bool Done);

