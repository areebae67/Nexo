namespace nexowebapp.Models.Entities
{
    
    
        public class TaskItem
        {
            public int Id { get; set; }

            public string Title { get; set; }
            public string Description { get; set; }

            public decimal Budget { get; set; }

            public string Category { get; set; }

            public string Zone { get; set; }

            public string Status { get; set; } = "Open";

            public bool IsFlagged { get; set; } = false;

            public DateTime CreatedAt { get; set; } = DateTime.Now;
        }
    }
