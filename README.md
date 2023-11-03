## Projeto - Observability

Projeto  feito para o módulo de Observability do curso [https://ada.tech/sou-aluno/programas/nuclea-ser-mais-tech](Ser+Tech) ministrado pela [https://www.linkedin.com/school/adatechbr/](Ada.Tech) em parceria com a [https://www.linkedin.com/company/nucleabr/](Núclea).

## Equipe

- [Fernanda Gabbai](https://github.com/fergabbai)
- [Michelle Lira](https://github.com/michelle-lira)
- [Andreza Pipolo](https://github.com/andrezapipolo)
- [Tatiane Paiva](https://github.com/Tatimoriam)

## Proposta

Realizar a criação e configuração do ambiente de observability utilizando as ferramentas: Prometheus, Alertmanager, Grafana, Cadvisor e um Container com uma aplicação HTTP.
Realizar a criação e configuração do ambiente de Logs utilizando as ferramentas: MongoDB, Elasticsearch e Graylog gerando logs básicos das aplicações;

## O Projeto

Este projeto foi feito utilizando uma Máquina Virtual com Ubuntu Server 22.04.
A VM (Máquina Virtual) foi configurada a rede como modo Bridge.
Primeiramente ao criar a VM  fizemos a instalação das ferramentas necessárias:

```
sudo apt update
sudo apt install
sudo apt install net-tools
curl -fsSL https://get.docker.com/ | sh
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose –-version
```

Após termos o docker instalado e funcional, nós copiamos o conteudo da pasta "app-lista" disponível neste repositório e rodamos o documento de Dockerfile disponível também neste repositório para criar uma imagem que contivesse a aplicação que utilizariamos para este projeto.

