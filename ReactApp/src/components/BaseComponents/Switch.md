

Switch example connection to a SoftChannel EPICS AI pv with use of EPICS label and a custom label position:

```js
{/*The TextOutput code is included for demonstration purposes only*/}  
{/*Only the the JSX code between the hashes  is required to instantiate the Switch */}  
  import TextOutput from './TextOutput';
  <React.Fragment>
  <div style={{marginBottom:8}}>
    <TextOutput
      pv='pva://$(device):BO$(id)'
      macros={{'$(device)':'testIOC','$(id)':'1'}}
      usePvLabel={true}
      usePvPrecision={true}
      usePvUnits={true}
      usePvMinMax={true}
      alarmSensitive={false}
      />
  </div>


{/*###############*/}  

  <Switch
    pv='pva://$(device):BO$(id)'
    macros={{'$(device)':'testIOC','$(id)':'1'}}
    usePvLabel={true}
    labelPlacement='end'
    />

{/*###############*/}  
  </React.Fragment>
```