using nexowebapp.Models.Entities;
namespace nexowebapp.Services.Interfaces
{
    public interface ITaskService
    {
        List<TaskItem> GetAllTasks();
        void AddTask(TaskItem task);
    }
}
