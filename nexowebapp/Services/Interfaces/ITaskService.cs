using nexowebapp.Models.Entities;

namespace nexowebapp.Services.Interfaces
{
    public interface ITaskService
    {
        List<TaskItem> GetAll();
        TaskItem GetById(int id);

        void Create(TaskItem task);
        void Update(TaskItem task);
        void Delete(int id);
    }
}

