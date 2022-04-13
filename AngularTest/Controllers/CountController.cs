using Microsoft.AspNetCore.Mvc;
using System;

namespace AngularTest.Controllers
{
    [ApiController]
    [Route("/counter")]
    public class CountController : ControllerBase
    {
        [HttpGet]
        [Route("get")]
        public int Get()
        {
            return 0;
        }

        [HttpGet]
        [Route("increment/{current}")]
        public IActionResult Increment(string current)
        {
            if (current != null) return Ok(int.Parse(current) + 1);
            Console.WriteLine("Current is null!");
            return Ok(0);
        }

        [HttpGet]
        [Route("decrement/{current}")]
        public IActionResult Decrement(string current)
        {
            if (current != null) return Ok(int.Parse(current) - 1);
            Console.WriteLine("Current is null!");
            return Ok(0);
        }
    }
}