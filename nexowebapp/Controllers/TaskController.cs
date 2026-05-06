using Microsoft.AspNetCore.Mvc;
using nexowebapp.Services.Interfaces;
using nexowebapp.Services.Interfaces;

namespace nexowebapp.Controllers
{
    public class TaskController : Controller
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        public IActionResult Index()
        {
            var tasks = _taskService.GetAllTasks();
            return View(tasks);
        }
    }
}
