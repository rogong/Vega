using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Vega.Controllers.Resources
{
    public class MakeResource
    {
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public System.Collections.Generic.ICollection<ModelResource> Models { get; set; }


        public MakeResource()
        {
            Models = new Collection<ModelResource>();
        }
    }
}