import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export default {
  async createFinance(req, res){
    try {
      const {data, titulo, valor, categoria} = req.body;

      const finance = await prisma.finance.create({
        data: {
          data,
          titulo,
          valor,
          categoria,
        },
      });
      
      return res.status(201).json(finance)

    } catch (error) {
      
      return res.status(400).json({msg: 'Erro ao cadastrar finance! ' + error});
    }

  },

  async findAllFinances(req, res){
    try {
      const finance = await prisma.finance.findMany({
        orderBy: {
          id: 'desc',
        },
      });

      return res.status(200).json(finance);

    } catch (error) {

      return res.json({msg: 'Erro ao listar todas finances! ' + error});
    }
  },

  async findFinance(req, res){
    try {
      const { id } = req.params;

      const finance = await prisma.finance.findUnique({
        where: {
          id: Number(id),
        },
      });

      if(!finance){
        return res.status(404).json({msg: 'Finance inexistente!'});
      }

      
      return res.status(200).json(finance);

    } catch (error) {

      return res.status(400).json({msg: 'Erro ao encontrar Finance! ' + error});
    }
  },

  async deleteFinance(req, res){
    try {
      const { id } = req.params;

      let finance = await prisma.finance.findUnique({
        where: {
          id: Number(id),
        },
      });

      if(!finance){
        return res.status(404).json({msg: 'Erro ao encontrar Finance'});
      }

      await prisma.finance.delete({
        where: {
          id: Number(id),
        },
      })

      
      return res.status(200).json({msg: 'Excluido com sucesso!'});

    } catch (error) {

      return res.status(400).json({msg: 'Erro ao excluir ' + error});
    }
  },

  async findAllFinance(req, res){
    try {
      const { search, take, skip } = req.params;

      const results = await prisma.finance.findMany({
        where: {
          titulo: {
            contains: search,
            mode: 'insensitive',
          }
        },
        take: Number(take),
        skip: Number(skip),
      });
      return res.status(200).json(results);
    } catch (error) {
      
      return res.status(400).json({msg: 'Erro ao listar finances por Params! ' + error});
    
    }
  },

  async findValores(req, res){
    try {
      const finance = await prisma.finance.groupBy({
        by: ['categoria'],
        _sum: {
          valor: true,
        }
      });
      
      return res.status(200).json(finance);

    } catch (error) {

      return res.status(400).json({msg: 'Erro ao encontrar Finance! ' + error});
    }
  },
}

