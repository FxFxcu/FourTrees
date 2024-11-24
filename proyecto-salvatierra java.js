document.addEventListener('DOMContentLoaded', function() {
    var productosDestacados = [
        { nombre: 'Apple iPhone 16 Pro Max (256 GB)', precio: 'US$1500', imagen: 'https://http2.mlstatic.com/D_NQ_NP_768410-MLU78891930890_092024-O.webp', categoria: 'electronica' },
        { nombre: 'Asus Rog Strix G16 2024 I7-13650hx 16gb Rtx4060 1tb G614j', precio: 'US$1200', imagen: 'https://http2.mlstatic.com/D_NQ_NP_657121-MLA73982830884_012024-O.webp', categoria: 'electronica' },
        { nombre: 'Auriculares Inalámbricos', precio: 'US$150', imagen: 'https://http2.mlstatic.com/D_NQ_NP_734745-MLU78156396323_082024-O.webp', categoria: 'electronica' },
        { nombre: 'Samsung Galaxy A15 128 GB Azul claro 4 GB RAM', precio: 'US$450', imagen: 'https://http2.mlstatic.com/D_NQ_NP_968531-MLA74353667823_022024-O.webp', categoria: 'electronica' },
        { nombre: 'Bicicleta Mtb Overtech R29 Acero 21v Freno A Disco Pc', precio: 'US$350', imagen: 'https://http2.mlstatic.com/D_NQ_NP_771348-MLA79782782660_102024-O.webp', categoria: 'electronica' },
    ];

    var ofertas = [
        { nombre: 'Camara Fotográfica Canon Rebel T100 18-55 Dciii Uscan Color Negro', precio: 'US$700', imagen: 'https://http2.mlstatic.com/D_NQ_NP_842574-MLA40353899541_012020-O.webp', categoria: 'electronica' },
        { nombre: 'Smart Tv Samsung Qled Qn55q65cagczb 4k 55 220v/240v Negro', precio: 'US$800', imagen: 'https://http2.mlstatic.com/D_NQ_NP_973901-MLA75572833193_042024-O.webp', categoria: 'electronica' },
        { nombre: 'Smartwatch Amazfit GTS 3 display de 1.75" con correa de silicona - color graphite black', precio: 'US$200', imagen: 'https://http2.mlstatic.com/D_NQ_NP_624263-MLU72638934087_112023-O.webp', categoria: 'moda' },
    ];
   
    function mostrarProductos(productos, seccionId) {
        var seccion = document.getElementById(seccionId);

        productos.forEach(function(producto) {
            var productoDiv = document.createElement('div');
            productoDiv.className = 'producto';

            var img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;

            var nombre = document.createElement('h2');
            nombre.textContent = producto.nombre;

            var precio = document.createElement('p');
            precio.textContent = producto.precio;

            productoDiv.appendChild(img);
            productoDiv.appendChild(nombre);
            productoDiv.appendChild(precio);
            
            seccion.appendChild(productoDiv);
        });
    }

    function cambiarSlide(n) {
        var slides = document.querySelectorAll('#carousel img');
        var currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        slides[currentIndex].classList.remove('active');
        var newIndex = (currentIndex + n + slides.length) % slides.length;
        slides[newIndex].classList.add('active');
    }

    function filtrarProductos() {
        var categoria = document.getElementById('categoria').value;
        var productosFiltrados = productosDestacados.filter(producto => categoria === 'todos' || producto.categoria === categoria);
        document.getElementById('productos-destacados').innerHTML = '';
        mostrarProductos(productosFiltrados, 'productos-destacados');
    }

    function buscarProducto() {
        var query = document.getElementById('buscar').value.toLowerCase();
        var resultados = productosDestacados.filter(producto => producto.nombre.toLowerCase().includes(query));
        document.getElementById('productos-destacados').innerHTML = '';
        mostrarProductos(resultados, 'productos-destacados');
    }

    mostrarProductos(productosDestacados, 'productos-destacados');
    mostrarProductos(ofertas, 'productos-ofertas');

    setInterval(() => cambiarSlide(1), 5000);
});
