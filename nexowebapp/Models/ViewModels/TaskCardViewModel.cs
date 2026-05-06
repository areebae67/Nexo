namespace nexowebapp.Models.ViewModels
{
    public class TaskCardViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Budget { get; set; }
        public string Category { get; set; }
        public string Distance { get; set; }
        public string Deadline { get; set; }
        public bool IsUrgent { get; set; }
        public string PosterName { get; set; }
        public string PosterAvatar { get; set; }
        public double PosterRating { get; set; }
    }
}
