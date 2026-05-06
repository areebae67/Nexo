using Microsoft.AspNetCore.Mvc;
using nexowebapp.Models.Entities;
using nexowebapp.Services.Interfaces;



public class TaskController : Controller
{
    private readonly ITaskService _service;

    public TaskController(ITaskService service)
    {
        _service = service;
    }

    public IActionResult Index()
    {
        var tasks = _service.GetAll();
        return View(tasks);
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Create(TaskItem task)
    {
        
        
            _service.Create(task);
            return RedirectToAction("Index");
        
     
    }

    public IActionResult Edit(int id)
    {
        var task = _service.GetById(id);
        return View(task);
    }

    [HttpPost]
    public IActionResult Edit(TaskItem task)
    {
        _service.Update(task);
        return RedirectToAction("Index");
    }

    public IActionResult Delete(int id)
    {
        _service.Delete(id);
        return RedirectToAction("Index");
    }

    public IActionResult Details(int id)
    {
        var task = _service.GetById(id);
        return View(task);
    }
}