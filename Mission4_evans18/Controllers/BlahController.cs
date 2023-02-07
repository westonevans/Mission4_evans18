using Microsoft.AspNetCore.Mvc;
using mission5_evans18.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission5_evans18.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calc()
        {
            return View();
        }

       
        [HttpPost]
        public IActionResult Calc(CalculatorModel model)
        {
            return View();
        }
    }
}
