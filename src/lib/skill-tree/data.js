import icon_vuejs from '$assets/img/vuejs.svg'
import icon_nuxtjs from '$assets/img/nuxt-square.svg'
import icon_nodejs from '$assets/img/icon_nodejs.svg'
import icon_python from '$assets/img/icon_Python.svg'
import icon_csharp from '$assets/img/csharp.svg'
import icon_golang from '$assets/img/Go_Logo_Blue.svg'
import icon_rust from '$assets/img/rust.svg'
import icon_svelte from '$assets/img/icon_svelte.svg'
import icon_solidjs from '$assets/img/icon_solidjs.svg'
import icon_astro from '$assets/img/icon_astro.svg'
import icon_godot from '$assets/img/icon_godot.svg'
import icon_deno from '$assets/img/icon_deno.svg'
import icon_expressjs from '$assets/img/icon_expressjs.svg'
import icon_jquery from '$assets/img/icon_jquery.svg'
import icon_tailwindcss from '$assets/img/icon_tailwind-css.svg'
import icon_rollup from '$assets/img/icon_rollup.svg'
import icon_vite from '$assets/img/icon_vite.svg'
import icon_mysql from '$assets/img/icon_mysql.svg'
import icon_pgsql from '$assets/img/icon_pgsql.svg'
import icon_mongodb from '$assets/img/icon_mongodb.svg'
import icon_redis from '$assets/img/icon_redis.svg'
import icon_pytorch from '$assets/img/icon_pytorch.svg'
import icon_flask from '$assets/img/icon_flask.svg'
import icon_django from '$assets/img/icon_django.svg'
import icon_docker from '$assets/img/icon_docker.svg'
import icon_unity from '$assets/img/icon_unity.svg'
import icon_htmx from '$assets/img/icon_htmx.svg'
import icon_grpc from '$assets/img/icon_grpc.svg'
import icon_asp from '$assets/img/icon_asp.svg'
import icon_tauri from '$assets/img/icon_tauri.svg'
import icon_tokio from '$assets/img/icon_tokio.svg'
import icon_storybook from '$assets/img/icon_storybook.svg'
import icon_leptos from '$assets/img/icon_leptos.png'
import icon_sass from '$assets/img/icon_sass.svg'
import icon_postcss from '$assets/img/icon_postcss.svg'

// l0: 1
// l1: 6
// l2: 12
// l3: 18

// node 
const nodes = [
  { id: 0, name: 'Terminal (start point)', layer: 0, parent: null, color: '#000000' },
  // layer 1
  { id: 1, name: 'Frontend', layer: 1, parent: 0, color: '#3498db' },
  { id: 2, name: 'Backend', layer: 1, parent: 0, color: '#2ecc71' },
  { id: 3, name: 'Data-Analysis', layer: 1, parent: 0, color: '#f39c12' },
  { id: 4, name: 'DevOps', layer: 1, parent: 0, color: '#2c3e50' },
  { id: 5, name: 'Game Dev', layer: 1, parent: 0, color: '#3498db' },

  // layer 2 limit-6
  { id: 6, name: 'Vue-js', layer: 2, parent: 1, icon: icon_vuejs, color: '#41b883' },
  { id: 7, name: 'Nuxt-js', layer: 3, parent: 6, icon: icon_nuxtjs, color: '#00c58e' },
  { id: 8, name: 'Svelte', layer: 2, parent: 1, icon: icon_svelte, color: '#ff3e00' },
  { id: 9, name: 'Astro-js', layer: 2, parent: 1, icon: icon_astro, color: '#000000' },
  { id: 10, name: 'others', layer: 2, parent: 1, color: '#607d8b' },

  // layer 3 limit-9
  { id: 11, name: 'Node-js', layer: 2, parent: 1, icon: icon_nodejs, color: '#68a063' },
  { id: 12, name: 'Solid-js', layer: 2, parent: 1, icon: icon_solidjs, color: '#4377bb' },
  { id: 13, name: 'Express-js', layer: 3, parent: 11, icon: icon_expressjs, color: '#000000' },
  { id: 14, name: 'Deno', layer: 3, parent: 10, icon: icon_deno, color: '#000000' },
  { id: 15, name: 'HTMX', layer: 3, parent: 10, icon: icon_htmx, color: '#1a2b34' },
  { id: 16, name: 'jQuery', layer: 3, parent: 10, icon: icon_jquery, color: '#0769ad' },

  // layer 4 limit-12
  { id: 17, name: 'RollupJs', layer: 4, parent: 11, icon: icon_rollup, color: '#ec4a3f' },
  { id: 18, name: 'ViteJs', layer: 4, parent: 17, icon: icon_vite, color: '#646c70' },
  { id: 19, name: 'Design System', layer: 4, parent: 18, icon: icon_storybook, color: '#ff4785' },
  { id: 20, name: 'Tailwind CSS', layer: 3, parent: 11, icon: icon_tailwindcss, color: '#38b2ac' },
  { id: 21, name: 'SCSS/SASS', layer: 3, parent: 11, icon: icon_sass, color: '#cc6699' },
  { id: 22, name: 'PostCSS', layer: 3, parent: 11, icon: icon_postcss, color: '#dd3a0a' },
  { id: 23, name: 'Tauri.app', layer: 4, parent: 10, icon: icon_tauri, color: '#24c8db' },

  // layer 2 limit-6 
  { id: 24, name: 'CSharp', layer: 2, parent: 2, icon: icon_csharp, color: '#239120' },
  { id: 25, name: 'Golang', layer: 2, parent: 2, icon: icon_golang, color: '#00acd7' },
  { id: 26, name: 'Rust', layer: 2, parent: 2, icon: icon_rust, color: '#dea584' },
  { id: 27, name: 'Database', layer: 2, parent: 3, color: '#4479a1' },
  { id: 28, name: 'Python', layer: 2, parent: 3, icon: icon_python, color: '#306998' },

  // layer 3 limit-9
  { id: 29, name: 'PostgreSQL', layer: 3, parent: 27, icon: icon_pgsql, color: '#336791' },
  { id: 30, name: 'MySQL', layer: 3, parent: 27, icon: icon_mysql, color: '#4479a1' },
  { id: 31, name: 'MongoDB', layer: 3, parent: 27, icon: icon_mongodb, color: '#13aa52' },
  { id: 32, name: 'Redis', layer: 3, parent: 27, icon: icon_redis, color: '#d82c20' },

  { id: 33, name: 'Pytorch', layer: 3, parent: 28, icon: icon_pytorch, color: '#ee4c2c' },
  { id: 34, name: 'Django', layer: 3, parent: 28, icon: icon_django, color: '#092e20' },
  { id: 35, name: 'Flask', layer: 3, parent: 28, icon: icon_flask, color: '#306998' },

  { id: 36, name: 'Docker', layer: 3, parent: 4, icon: icon_docker, color: '#2496ed' },
  // layer 4 limit-12
  { id: 37, name: 'Actrix', layer: 4, parent: 26, color: '#3386f2' },
  { id: 38, name: 'Axum', layer: 4, parent: 26, icon: icon_tokio, color: '#00599c' },
  { id: 39, name: 'Tonic', layer: 4, parent: 26, icon: icon_grpc, color: '#754425' },
  { id: 40, name: 'Leptos', layer: 4, parent: 26, icon: icon_leptos, color: '#dea584' },

  { id: 41, name: 'Unity', layer: 4, parent: 5, icon: icon_unity, color: '#000000' },
  { id: 42, name: 'Godot', layer: 4, parent: 5, icon: icon_godot, color: '#478cbf' },

  { id: 43, name: 'Gin', layer: 4, parent: 26, color: '#00acd7' },
  { id: 44, name: 'gRPC', layer: 4, parent: 26, icon: icon_grpc, color: '#76a5af' },

  { id: 45, name: 'ASP.NET', layer: 4, parent: 24, icon: icon_asp, color: '#5c2d91' },
]
// .map(node => ({ ...node, color: themeColors[node.name] }))

export {
  // layer,
  nodes
}