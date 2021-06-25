import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
 import { List, Wrapper, Obs } from './styles';

function Act01() {
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    const handleChange = (event, func) => {
        func(event.target.value);
    };

  return (<Wrapper>

      <Card className="card">
      <h2>Classifique as palavras em: características, membros da família, profissão, lugares e verbos. </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
            <List>
                <Typography variant="h4" gutterBottom>
                Busy
                </Typography>

                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup aria-label="gender" name="gender" value={value} onChange={(e) => handleChange(e, setValue)}>
                        <FormControlLabel disabled={value && value !== "characteristic"} className={value === "characteristic" ? "isCorrent" : ""} value="characteristic" control={<Radio />} label="Characteristic" />
                        <FormControlLabel disabled={value} className={value === "family members" && value !== "characteristic" ? "isWrong" : ""} value="family members" control={<Radio />} label="Family members" />
                        <FormControlLabel disabled={value} className={value === "occupation" && value !== "characteristic" ? "isWrong" : ""} value="occupation" control={<Radio />} label="Occupation" />
                        <FormControlLabel disabled={value} className={value === "place" && value !== "characteristic" ? "isWrong" : ""} value="place" control={<Radio />} label="place" />
                        <FormControlLabel disabled={value} className={value === "verb" && value !== "characteristic" ? "isWrong" : ""} value="verb" control={<Radio />} label="Verb" />
                    </RadioGroup>
                </FormControl>
            </List>
            {value && <Obs>ocupado, com muitas atribuições / agitado, com muitas pessoas</Obs>}
        </Grid>
        <Grid item xs={12} lg={4}>
        <List>
                <Typography variant="h4" gutterBottom>
                Companies
                </Typography>

                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup aria-label="gender1" name="gender1" value={value1} onChange={(e) => handleChange(e, setValue1)}>
                        <FormControlLabel disabled={value1} className={value1 === "characteristic" && value1 !== "place" ? "isWrong" : ""}  value="characteristic" control={<Radio />} label="Characteristic" />
                        <FormControlLabel disabled={value1} className={value1 === "family members" && value1 !== "place" ? "isWrong" : ""} value="family members" control={<Radio />} label="Family members" />
                        <FormControlLabel disabled={value1} className={value1 === "occupation" && value1 !== "place" ? "isWrong" : ""} value="occupation" control={<Radio />} label="Occupation" />
                        <FormControlLabel disabled={value1 && value1 !== "place"} className={value1 === "place" ? "isCorrent" : ""} value="place" control={<Radio />} label="place" />
                        <FormControlLabel disabled={value1} className={value1 === "verb" && value1 !== "place" ? "isWrong" : ""} value="verb" control={<Radio />} label="Verb" />
                    </RadioGroup>
                </FormControl>
            </List>
            {value1 && <Obs>companies são empresas, business negócios</Obs>}
        </Grid>       
         <Grid item xs={12} lg={4}>
         <List>
                <Typography variant="h4" gutterBottom>
                Home
                </Typography>

                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup aria-label="gender2" name="gender2" value={value2} onChange={(e) => handleChange(e, setValue2)}>
                        <FormControlLabel disabled={value2} className={value2 === "characteristic" && value2 !== "place" ? "isWrong" : ""}  value="characteristic" control={<Radio />} label="Characteristic" />
                        <FormControlLabel disabled={value2} className={value2 === "family members" && value2 !== "place" ? "isWrong" : ""} value="family members" control={<Radio />} label="Family members" />
                        <FormControlLabel disabled={value2} className={value2 === "occupation" && value2 !== "place" ? "isWrong" : ""} value="occupation" control={<Radio />} label="Occupation" />
                        <FormControlLabel disabled={value2 && value2 !== "place"} className={value2 === "place" ? "isCorrent" : ""} value="place" control={<Radio />} label="place" />
                        <FormControlLabel disabled={value2} className={value2 === "verb" && value2 !== "place" ? "isWrong" : ""} value="verb" control={<Radio />} label="Verb" />
                    </RadioGroup>
                </FormControl>
            </List>
            {value2 && <Obs>home = lar, sua casa / house = casa</Obs>}
        </Grid>
    </Grid>
    </Card>
  </Wrapper>);
}

export default Act01;