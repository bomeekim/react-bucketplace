import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  OutlinedInput,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeOption } from '../redux/modules/cart';

function CartedProductOptionAction({ option }) {
  const { cost, stock } = option;
  const [count, setCount] = useState(option.count);
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const onChangeOption = (option) => dispatch(changeOption(option));

  /**
   * state 와 reducer 를 통해 option의 수량을 변경하는 함수
   * @param count 수량
   */
  const changeCount = (count) => {
    // state 를 변경한다.
    setCount(count);

    // reducer를 통해 option 값을 변경한다.
    onChangeOption({
      ...option,
      count,
    });
  }

  /**
   * 수량 select 변경 시 호출되는 함수
   * @param event
   */
  const handleSelectChange = (event) => {
    let count = event.target.value;

    if (count === '10+') {
      setShowInput(true);
    } else {
      if (count > stock) {
        alert('선택한 개수보다 재고가 모자랍니다.');
      } else {
        changeCount(count);
      }
    }
  };

  /**
   * 10개 이상 시 보여지는 Input 창에 값을 입력했을 때 호출되는 함수
   * @param event
   */
  const handleInputChange = (event) => {
    const input = event.target.value;

    // 숫자 또는 빈 스트링만 입력했을 경우 state 에 input 값을 저장한다.
    if (/[0-9]/g.test(input) || !input) {
      setInput(event.target.value);
    }
  }

  /**
   * Input 창에서 엔터를 쳤을 때 호출되는 함수
   * @param event
   */
  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      let count = Number(event.target.value);

      if (count <= stock && count > 0) {
        changeCount(count);
      } else {
        if (count > stock) {
          alert('선택한 개수보다 재고가 모자랍니다.');
        } else if (count === 0) {
          alert('0보다 큰 정수를 입력해야 합니다.');
        }

        setInput('');
      }
    }
  }

  /**
   * 포커스 아웃되었을 때 호출되는 함수
   * 값이 없는 경우 이전에 저장된 count 값을 input value에 넣어준다.
   * @param event
   */
  const handleInputBlur = (event) => {
    if (!event.target.value) {
      setInput(option.count);
    }
  }

  // 1부터 10+ 까지 배열 생성
  const options = Array(10).fill().map((arr, i) => i+1);
  options.push('10+');

  return (
    <FormControl
      fullWidth
      sx={{ display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            minWidth: '80px' }}
    >
      {showInput &&
        <OutlinedInput
          size="small"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={input}
          onKeyDown={handleInputKeyDown}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />}
      {!showInput &&
        <Select
          size="small"
          value={count}
          onChange={handleSelectChange}
        >
          {options.map(val =>
            <MenuItem value={val} key={val}>{val}</MenuItem>)
          }
        </Select>
      }
      <Typography
        fontWeight={700}
        fontSize={16}
        lineHeight="20px"
        letterSpacing="-0.3px"
      >
        {(count * cost)?.toLocaleString()}원
      </Typography>
    </FormControl>
  )
}

export default CartedProductOptionAction;
