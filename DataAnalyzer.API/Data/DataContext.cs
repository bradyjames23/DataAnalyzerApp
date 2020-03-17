using DataAnalyzer.API.Models;
using DataAnalyzer.API.Models.AccessManagement;
using Microsoft.EntityFrameworkCore;

namespace DataAnalyzer.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }
        
        // Access Management
        public DbSet<User> Users { get; set; }
    }
}