using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission5_evans18.Models
{
    public class CalculatorModel
    {
        //data validation and variables 
        [Range(0, 100, ErrorMessage = "Assignments must be between 0 and 100")]
        public int Assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Group Project must be between 0 and 100")]
        public int GroupProject { get; set; }

        [Range(0, 100, ErrorMessage = "Quiz must be between 0 and 100")]
        public int Quiz { get; set; }

        [Range(0, 100, ErrorMessage = "Midterm must be between 0 and 100")]
        public int Midterm { get; set; }

        [Range(0, 100, ErrorMessage = "Final must be between 0 and 100")]
        public int Final { get; set; }

        [Range(0, 100, ErrorMessage = "Intex must be between 0 and 100")]
        public int Intex { get; set; }

    }
}
