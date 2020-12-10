### Memories

Mengubah waktu standar menjadi waktu moment.

### Mulai cepat

```html
...
<time datetime="12/7/2020, 16:11:00"></time>
<script src="https://cdn.jsdelivr.net/npm/@wadahkode/memories@1.0.0-b/build/memories.min.js"></script>
...
```

### Cara penggunaan pada lingkungan nodejs

```javascript
const Memories = require('@wadahkode/memories);

const article = new Memories(
  new Date("1/1/1990, 12:00:00"), // start
  new Date() // end
);

console.log(article.getMemoTime());
```



### Manual

Untuk melakukan perubahan secara manual baca petunjuk dibawah ini:

### syarat

<ul>
    <li>npm sudah terinstall</li>
    <li>webpack sudah terinstall</li>
</ul>

### Mengunduh repository dan melihat perubahan

    $ git clone https://github.com/wadahkode/memories.git
    $ yarn start
    
### Build

    $ yarn build

### catatan

Mungkin masih banyak bug/kesalahan, jadi silahkan tinggalkan issue atau lakukan pull request,
jangan sungkan untuk saling berbagi, karena dengan berbagi akan
menambah wawasan dan pengetahuan kita.