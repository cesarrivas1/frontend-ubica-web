import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {
  public itemsList: any = [
    {
      title: '¿Qué es un Ubi-k?',
      description: 'Ubi-k Es una aplicación electrónica diseñada para  publicar y contactar muy fácil  todo tipo de  Servicios, comercios y emprendedores,  por medio de geolocalización prioriza los más cerca de ti, pudiendo contactarlos directamente ya que nuestra App te muestra fotos, Perfil, números telefónicos, redes sociales y calificación de servicios anteriores. También te muestra mapa con la ubicación  y distancia del proveedor.  '
    },
    {
      title: '¿Para quién es Ubi-k?',
      description: 'Ubi-k es para todos los venezolanos que tenga la necesidad de buscar rápido y sencillo cualquier tipo de servicio o producto, también para todas las personas que necesitan publicar sus servicios o productos para aumentar los ingresos.'
    },
    {
      title: '¿Cómo descargar la aplicación Ubi-k?',
      description: 'Para descargar la aplicación busca en Google Play o App Store, contesta unas pocas preguntas para tu registro y listo así de fácil, su descarga y búsquedas de lo que requieres es completamente Gratis.'
    },
    {
      title: '¿Cómo hago para publicar mis servicios, Comercio  o Emprendimiento en Ubi-k?',
      description: 'Para publicar sus servicios, comercio y/o emprendiendo en Ubi-k es necesario afiliarse a la Network Marketing Ubi-k,  entra a la web www.ubi-k.org  seleccione la categoría que requiere afiliarse, contestas unas preguntas, diligencia unos documentos y los envía. Personal interno de la empresa los verifica y aprueba la afiliación.  '
    },
    {
      title: '¿Costo para afiliarme a Network Marketing Ubi-k?',
      description: 'El costo de la afiliación y de la mensualidad para publicar sus servicios, comercio o productos es la cantidad de diez (10) dólares americanos mensuales más impuesto al valor agregado (IVA), se cobra en moneda de curso legal (Bs) de acuerdo a la tasa de cambio del banco central de Venezuela (B.C.V.) vigente a la fecha del cobro de la mensualidad que es los primeros cinco días de cada mes. '
    },
    {
      title: '¿Formas de pago dela suscrición a Ubi-k?',
      description: 'El cobro de la Afiliación y Mensualidad es en bolívares, por medio de pago domiciliado, para esto es necesario su autorización por escrito dirigido al banco (le enviamos el formulario)  para que el banco lo debite de su cuenta bancaria cada mes. También tenemos  por transferencia bancaria cuando paga el contrato anual por adelantado. .'
    },
    {
      title: '¿En qué se diferencia Ubi-k de otros medio de publicación?',
      description: 'Ubi-k se diferencia de otros medio de publicación por muchas razones, es tecnología que es la tendencia de hoy en día, es económico, mayor cobertura,  fácil búsqueda y muy efectivo por la facilidad de encontrar el servicio, comercio o producto a corta distancia de la búsqueda y la mayor diferencia es la única que tiene la opción de ser parte de Network Marketing en publicidad, con un poco esfuerzo logra obtener  pagos por afiliaciones bien interesantes cada mes.'
    },

  ];
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
