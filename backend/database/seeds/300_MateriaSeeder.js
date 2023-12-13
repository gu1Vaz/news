'use strict'


const Materia = use('App/Models/Materia')

const Factory = use('Factory')

class MateriaSeeder {
  async run () {
    await Materia.createMany([
      {
        route_id:'baron_samedit_cve_2021-3156T',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png',
        title: 'Baron Samedit - CVE-2021-3156',
        subtitle: 'Vulnerabilidade de escolanomento de privilegios Unix e Linux',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste1',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/1.webp',
        title: 'Meltdown - CVE-2017-5754',
        subtitle: 'Vulnerabilidade de canal lateral que permite o acesso não autorizado à memória do kernel em processadores modernos.',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste2',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/2.png',
        title: 'Spectre - CVE-2017-5715, CVE-2017-5753',
        subtitle: 'Vulnerabilidades de execução especulativa que permitem vazamento de informações sensíveis entre processos em CPUs modernas.',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste3',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/3.jpeg',
        title: 'Heartbleed - CVE-2014-0160',
        subtitle: 'Vulnerabilidade no OpenSSL que permite o vazamento de informações sensíveis através de um ataque de estouro de buffer.',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste4',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/4.png',
        title: 'Shellshock - CVE-2014-6271, CVE-2014-7169',
        subtitle: 'Vulnerabilidades no Bash (shell do Unix) que permitem a execução de comandos arbitrários através de variáveis de ambiente manipuladas',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste5',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/5.png',
        title: 'EternalBlue - CVE-2017-0144',
        subtitle: 'Vulnerabilidade no protocolo SMBv1 que permite a execução remota de código em sistemas Windows não atualizados',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste6',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/6.png',
        title: 'Poodle - CVE-2014-3566',
        subtitle: 'Vulnerabilidade no protocolo SSLv3 que permite ataques de downgrade e revelação de informações sensíveis',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste7',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/7.png',
        title: 'Dirty Cow - CVE-2016-5195',
        subtitle: 'Vulnerabilidade de escalonamento de privilégios no kernel do Linux, permitindo modificação de arquivos somente leitura',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      },
      {
        route_id:'teste8',
        image_url:'http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/8.png',
        title: 'Stack Clash - CVE-2017-1000364',
        subtitle: 'Vulnerabilidade de escalonamento de privilégios que permite ataques de estouro de pilha em sistemas Unix',
        intro: 'O CVE-2021-3156, apelidado de "Baron Samedit", é uma vulnerabilidade de segurança crítica que foi descoberta no início de 2021. Essa falha afeta a biblioteca Sudo, um programa amplamente utilizado em sistemas operacionais Unix e Linux, que permite que usuários executem comandos com privilégios administrativos. A exploração bem-sucedida dessa vulnerabilidade poderia permitir que um invasor ganhasse acesso de root a um sistema comprometido, contornando as restrições de segurança e obtendo controle total sobre o dispositivo.',
        dev: 'A vulnerabilidade CVE-2021-3156 reside no processo de autenticação do Sudo, mais especificamente no manipulador de argumentos "sudoedit". Um invasor mal-intencionado pode explorar essa falha ao fornecer argumentos especialmente criados durante a execução do comando "sudoedit". Esses argumentos podem enganar o Sudo, levando-o a executar comandos arbitrários com privilégios elevados.<newline>O impacto do CVE-2021-3156 é significativo, pois permite que um atacante ganhe acesso completo a um sistema comprometido, potencialmente comprometendo a integridade dos dados, realizando atividades maliciosas ou até mesmo estabelecendo um ponto de apoio para ataques futuros. Além disso, a vulnerabilidade pode ser explorada de forma remota, o que aumenta ainda mais o risco de ataques generalizados.',
        coc:'O CVE-2021-3156, conhecido como "Baron Samedit", é uma vulnerabilidade crítica que afeta a biblioteca Sudo. É essencial que os administradores de sistemas e usuários estejam cientes dessa falha e tomem medidas imediatas para mitigar o risco. A correção para essa vulnerabilidade foi disponibilizada pelos desenvolvedores do Sudo e é altamente recomendável que todos os sistemas afetados sejam atualizados para as versões corrigidas o mais rápido possível.',
        creador: 'Gui',
        vet_links:`GitHub<link>www.github.com/worawit/CVE-2021-3156`,
        vet_images:`http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/b.png<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/a.png`,
        vet_files: "http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_u14.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_manual.py<newline>http://127.0.0.1:3333/uploads/baron_samedit_cve_2021-3156T/exploit_nss_d9.py",
        admin_id: 1
      }
    ]);
  }
}

module.exports = MateriaSeeder
