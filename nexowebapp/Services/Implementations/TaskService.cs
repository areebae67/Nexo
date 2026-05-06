using nexowebapp.Data;
using nexowebapp.Models.Entities;
using nexowebapp.Services.Interfaces;
using nexowebapp.Data;
using nexowebapp.Models.Entities;
using nexowebapp.Services.Interfaces;

namespace nexowebapp.Services.Implementations
{
    public class TaskService : ITaskService
    {
        private readonly ApplicationDbContext _context;

        public TaskService(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<TaskItem> GetAllTasks()
        {
            return _context.Tasks.ToList();
        }

        public void AddTask(TaskItem task)
        {
            _context.Tasks.Add(task);
            _context.SaveChanges();
        }
    }
}