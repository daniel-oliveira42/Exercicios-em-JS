function checarLados(lado1, lado2, lado3) 
{
    if(lado1 === lado2 && lado2 === lado3)
    {
        return 'Equilátero'
    }
    else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3)
    {
        return 'Isóceles'
    }
    else
    {
        return 'Escaleno'
    }
}

console.log(checarLados(1, 2, 3))
