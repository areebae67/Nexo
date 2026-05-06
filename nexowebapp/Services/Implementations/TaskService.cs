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

        public List<TaskItem> GetAll()
        
        {
            return _context.Tasks.ToList();
        }

        public TaskItem GetById(int id)
        {
            return _context.Tasks.FirstOrDefault(x => x.Id == id);
        }

        public void Create(TaskItem task)
        {
            _context.Tasks.Add(task);
            _context.SaveChanges();
        }

        public void Update(TaskItem task)
        {
            _context.Tasks.Update(task);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var task = _context.Tasks.Find(id);
            if (task != null)
            {
                _context.Tasks.Remove(task);
                _context.SaveChanges();
            }
        }
    }
}