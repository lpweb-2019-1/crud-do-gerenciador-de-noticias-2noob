import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = null;
  conteudo = null;
  date = null;
  noticias = [];
  categoria= null;
  tags = null;
  editora = null;
  alterar = null;
  noticiapublicada = null;

  mostrar(noticia) 
  {
    noticia.visivel = true;
    
  };
  fechar(noticia)
  {
    noticia.visivel = false;  
  };
  salvar() 
  {
    if (this.alterar){
      this.alterar.titulo = this.titulo;
      this.alterar.conteudo = this.conteudo;
      this.alterar.date = this.date;
      this.alterar.categoria = this.categoria;
      this.alterar.tags = this.tags;
      this.alterar.editora = this.editora;
      this.alterar.noticiapublicada = this.noticiapublicada;
      
    }else{
        const noticia = {
        id: Math.random(),
        titulo: this.titulo, 
        conteudo: this.conteudo,
        date: this.date,
        categoria: this.categoria,
        tags: this.tags,
        editora: this.editora,
        noticiapublicada: this.noticiapublicada,
        visivel: false };
        this.noticias.push(noticia);
    }    
    this.titulo = null;
    this.conteudo = null;
    this.date = null;
    this.categoria = null;
    this.tags = null;
    this.editora = null;
    this.noticiapublicada = null;

  };
  delete(noticia)
  {
  if (confirm('Você tem certeza?'))
  {
    this.noticias = this.noticias.filter(item =>  item.id != noticia.id)
  };
  };
  editar(noticia) 
  {
  this.alterar = noticia
  this.titulo = noticia.titulo;
  this.conteudo = noticia.conteudo;
  this.date = noticia.date;
  this.tags = noticia.tags;
  this.categoria = noticia.categoria;
  this.editora = noticia.editora;
  this.noticiapublicada = noticia.noticiapublicada;
  }
}
