const fs = require('fs');
const path = require('path');
const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(f => {
  const file = path.join(dir, f);
  let text = fs.readFileSync(file, 'utf8');

  // Universal Header
  text = text.replace(/<span style="font-size: 2rem;">.*?<\/span>/g, '<span style="font-size: 2rem;">🍦</span>');
  text = text.replace(/cursor: pointer;">.*?<\/button>/g, 'cursor: pointer;">☰</button>');

  // Universal Footer Base (IceCreamy block)
  text = text.replace(/mucho amor\. .*?<\/p>/g, 'mucho amor. ❤️ 🍦</p>');
  
  // Footer Links
  text = text.replace(/<ul style="line-height: 2;">([\s\S]*?)<\/ul>/g, `<ul style="line-height: 2;">
                        <li><a href="index.html">🏠 Inicio</a></li>
                        <li><a href="nosotros.html">👥 Nuestra Historia</a></li>
                        <li><a href="productos.html">🍓 Menú</a></li>
                        <li><a href="servicios.html">🎉 Servicios</a></li>
                    </ul>`);

  // Footer Contact info
  text = text.replace(/<h4 style="color: white;">Contacto<\/h4>([\s\S]*?)<\/div>\s*<\/div>/g, `<h4 style="color: white;">Contacto</h4>
                    <p>📍 Calle Sabor 123, Ciudad Dulce</p>
                    <p>📞 (555) 123-4567</p>
                    <div style="margin-top: 1rem; font-size: 1.5rem;">
                        <span>📘</span> <span>📷</span> <span>🎵</span>
                    </div>
                </div>
            </div>`);

  // JS Script fixes
  text = text.replace(/mobileMenuBtn\.textContent = '.*?';([^}]*)} else {/g, "mobileMenuBtn.textContent = '✕';$1} else {");
  text = text.replace(/mobileMenuBtn\.textContent = '.*?';\s*}/g, "mobileMenuBtn.textContent = '☰';\n                }");
  text = text.replace(/if \(mobileMenuBtn\) mobileMenuBtn\.textContent = '.*?';/g, "if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';");

  // nosotros.html specific
  text = text.replace(/div>\s*x x/g, 'div>\n                    👵🍦');
  text = text.replace(/margin-bottom: 1rem;">xa<\/div>/g, 'margin-bottom: 1rem;">💖</div>');
  text = text.replace(/margin-bottom: 1rem;">x ️<\/div>/g, 'margin-bottom: 1rem;">🔭</div>'); // vision

  // productos.html specific cards
  text = text.replace(/background: #F8BBD0; font-size: 4rem;">.*?<\/div>/g, 'background: #F8BBD0; font-size: 4rem;">🍓</div>');
  text = text.replace(/background: #C8E6C9; font-size: 4rem;">.*?<\/div>/g, 'background: #C8E6C9; font-size: 4rem;">🍋</div>');
  text = text.replace(/background: #FFF9C4; font-size: 4rem;">.*?<\/div>/g, 'background: #FFF9C4; font-size: 4rem;">🥥</div>');
  text = text.replace(/background: #D1C4E9; font-size: 4rem;">.*?<\/div>/g, 'background: #D1C4E9; font-size: 4rem;">🫐</div>');
  text = text.replace(/background: #8D6E63; font-size: 4rem; color: white;">.*?<\/div>/g, 'background: #8D6E63; font-size: 4rem; color: white;">🍫</div>');
  text = text.replace(/background: #FFCCBC; font-size: 4rem;">.*?<\/div>/g, 'background: #FFCCBC; font-size: 4rem;">🍬</div>'); // Chicle (replaced later below too if needed)
  if (f === 'productos.html') {
      text = text.replace(/Durazno<\/h3>\s*<p>.*?<\/p>\s*<span/g, 'Durazno</h3>\n                            <p>Dulce y cremosa</p>\n                            <span');
      // replace the last two 4rem icons based on title
      text = text.replace(/font-size: 4rem;">.*?<\/div>\s*<div class="card-body">\s*<h3 class="card-title">Durazno/g, 'font-size: 4rem;">🍑</div>\n                        <div class="card-body">\n                            <h3 class="card-title">Durazno');
  }

  // servicios.html specific
  text = text.replace(/font-size: 5rem; margin-bottom: 1rem;">x}0<\/div>/g, 'font-size: 5rem; margin-bottom: 1rem;">🎉</div>');
  text = text.replace(/font-size: 5rem; margin-bottom: 1rem;">x <\/div>/g, 'font-size: 5rem; margin-bottom: 1rem;">🚚</div>');
  text = text.replace(/font-size: 5rem;.*?order: 2;">\s*x x/g, 'font-size: 5rem; order: 2;">\n                    🚚🍨');
  text = text.replace(/font-size: 5rem;">\s*x}x/g, 'font-size: 5rem;">\n                    🎉🍨');

  fs.writeFileSync(file, text);
});
console.log('Fixed rest of files');
