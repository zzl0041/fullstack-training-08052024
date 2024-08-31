const Company = require('../models/companyModel.js')

const createCompany = async (req, res) => {
  const { name, description, headquarters, industry } = req.body

  try {
    const createdCompany = await Company.create({
      name,
      description,
      headquarters,
      industry,
      employees: [],
    })

    res.status(201).json(createdCompany)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to create company', details: error.message })
  }
}

const getCompanyById = async (req, res) => {
  const id = req.params.id

  try {
    const company = await Company.findById(id)

    if (company) {
      res.status(200).json({
        _id: company._id,
        name: company.name,
        headquarters: company.headquarters,
        industry: company.industry,
        employees: company.employees,
      })
    } else {
      res.status(404).json({ error: 'Company not found' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to retrieve company', details: error.message })
  }
}

const updateCompany = async (req, res) => {
  const company = await Company.findById(req.params.id)

  if (company) {
    company.name = req.body.name || company.name
    company.description = req.body.description || company.description
    company.headquarters = req.body.headquarters || company.headquarters
    company.industry = req.body.industry || company.industry

    const updatedCompany = await company.save()

    res.status(200).json({
      _id: updatedCompany._id,
      name: updatedCompany.name,
      description: updatedCompany.description,
      headquarters: updatedCompany.headquarters,
      industry: updatedCompany.industry,
      employees: updatedCompany.employees,
    })
  } else {
    res
      .status(404)
      .json({ error: 'Failed to update company', details: error.message })
  }
}

const deleteCompany = async (req, res) => {
  const company = await Company.findById(req.params.id)

  if (company) {
    await Company.deleteOne({ _id: company._id })
    res.status(200).json({ message: 'Company deleted' })
  } else {
    res
      .status(404)
      .json({ error: 'Failed to delete company', details: error.message })
  }
}
const getAllCompanies = async (req, res) => {
  const companies = await Company.find({})
  res.status(200).json(companies)
}

const getEmployeesOfCompany = async (req, res) => {
  const id = req.params.id

  try {
    const company = await Company.findById(id)

    if (company) {
      res.status(200).json({
        employees: company.employees,
      })
    } else {
      res.status(404).json({ error: 'Company not found' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to retrieve employees', details: error.message })
  }
}

module.exports = {
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getAllCompanies,
  getEmployeesOfCompany,
}
