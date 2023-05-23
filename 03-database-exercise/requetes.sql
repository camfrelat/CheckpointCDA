-- Toutes les offres d'emploi

SELECT * FROM  offer;

-- Toutes les offres d'emploi d'une ville (Paris)

SELECT * FROM  offer WHERE city == 'Paris';

-- Les informations de tous candidats qui ont postulé à une offre précise

SELECT * FROM candidate 
JOIN jobApplication ON jobApplication.candidateId == candidate.id
JOIN offer ON offer.id == jobApplication.OfferId
WHERE Offer.title == 'vendeuse fleurs'


-- Les informations de tous les candidats qui ont postulé aux offres d'une entreprise

SELECT * FROM candidate 
JOIN jobApplication ON jobApplication.candidateId == candidate.id
JOIN Offer ON offer.id == jobApplication.OfferId
JOIN company ON company.id == offer.companyId
WHERE company.name  == 'marché aux fleurs'