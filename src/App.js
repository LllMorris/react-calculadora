import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => { 
  const [currentNumber, setCurrentNumber] = useState('0'); 
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber('0');
    setOperation('');

  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0' ){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleMinusNumber = () => {
    console.log(firstNumber, currentNumber);
    if(firstNumber === '0' ){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(firstNumber);
      setOperation('-');
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleMultNumber = () => {
    console.log(firstNumber, currentNumber);
    if(firstNumber === '0' ){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(firstNumber);
      setOperation('X');
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleDivNumber = () => {
    console.log(firstNumber, currentNumber);
    if(firstNumber === '0' ){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(firstNumber);
      setOperation('/');
    }else{
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber != '0' && operation != '' && currentNumber != '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case 'X':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        default: break;
      }
    }

  }

  return (
    <Container>
      <Content>
        <Input value= {currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultNumber}/>
          <Button label="/" onClick={handleDivNumber}/>
          <Button label="C" onClick={handleClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
  
}

export default App;