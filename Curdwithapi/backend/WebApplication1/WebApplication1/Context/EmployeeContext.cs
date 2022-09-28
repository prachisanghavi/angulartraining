
using WebApplication1.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;


namespace WebApplication1.Context
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
        }
        public DbSet<Employee> Employee { get; set; }

    }
}
