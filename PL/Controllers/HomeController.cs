using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using PL.TrupperReference;

namespace PL.Controllers
{
    public class HomeController : Controller
    {
        ServiceClient trupper = new ServiceClient();

        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetProductos()
        {
            return Json(trupper.GetProductos().ListaProductos, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Add(Cliente cliente, List<Producto> productos)
        {
            ClienteResponse request = trupper.AddCliente(cliente,productos.ToArray());
            return Json(request, JsonRequestBehavior.AllowGet);
        }
    }
}