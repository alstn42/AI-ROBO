# AI Collaborative Robot System
## Hardware Installation Guideline
**INDUSTRIAL SMART AUTOMATION SOLUTION**

This document was created based on the hardware technical guidelines in the official AI-ROBO website's Guide tab.

- **Document Category**: Technical Installation Manual
- **Source**: AI-ROBO Engineering Solution Portal
- **Version**: v1.1 (2026 Revision)
- **Safety Certification**: Compliant with ISO 10218-1 / ISO/TS 15066 safety standards

---

### 1. AI-ROBO Hardware Solution Overview
AI-ROBO smart collaborative robots are designed for safe human-robot coexistence and high productivity. To operate flexibly in the same space as workers without safety fences, physical fixing and power system connections must be perfectly implemented during the initial setup. This guide helps site visitors and field engineers set up the hardware safely step-by-step.

> [!IMPORTANT]
> **Safety Notice (Read Carefully)**
> AI-ROBO features 24/7 real-time monitoring and autonomous collision detection. However, poor physical fixing or electrical noise can cause sensor malfunction. **Always turn off the main power completely during all assembly and wiring stages.**

#### 1.1 Infrastructure Requirements
| Category | Requirements | Importance |
| :--- | :--- | :--- |
| **Surface Flatness** | Less than 0.3° gradient, vibration-free steel frame or concrete floor | Critical (Directly affects precision) |
| **Input Power** | AC 200V ~ 240V, 50/60Hz (Single-phase), voltage fluctuation within ±10% | Mandatory (Protects controller) |
| **Grounding System** | Type 3 grounding (Independent grounding below 100Ω recommended) | Mandatory (Blocks signal noise) |
| **Pneumatic Supply** | Compressed air 0.5 ~ 0.7 MPa (When using pneumatic grippers) | Optional (Optimizes tool specs) |

---

### 2. Step 1: Securing the Robot Base
Perfect assembly of the base frame is required to stably support the high acceleration and payload of AI-ROBO.

#### 2.1 Positioning and Leveling
- Review the layout to ensure there are no physical interferences with structures or walls within the robot's maximum workspace.
- Place a precision-machined digital level at the center of the robot installation surface and finely adjust the leveling feet to keep the level within 0.3°.

#### 2.2 High-Strength Bolt Fastening Procedure
1. Apply medium-strength threadlocker (Loctite 243) to high-strength hex bolts matching the AI-ROBO base specifications.
2. Pre-fasten bolts in the four fixing holes, then tighten them progressively in a **diagonal pattern** to ensure even force distribution.
3. Use a torque wrench to complete final fastening according to the specified torque values for each model.

---

### 3. Step 2: Power Infrastructure and Signal Cable Interface
This step safely connects the Control Box and Robot Arm electrically.

#### 3.1 Main Power and Controller Wiring
- When wiring the control power, ensure the design includes a dedicated Earth Leakage Breaker (ELB) at the input stage.
- Do not place power and communication lines in parallel; maintain at least 10cm separation to prevent noise interference.

#### 3.2 Harness Connector Coupling
- When connecting heavy-duty connectors between the robot body and controller, push them in vertically and completely to avoid bending internal pins, then secure the external double-locking levers.

---

### 4. Step 3: End-Effector and Dresspack Guide
This process joins appropriate mechanical parts (grippers, vision cameras, etc.) to the AI-ROBO end-flange.

#### 4.2 Optimal Dresspack Wiring
- Ensure electrical wires and air hoses connected to the tool do not twist during joint rotation. Perform a virtual "maximum range of motion test" and secure them to the ARM with guide clamps after ensuring sufficient margin.

---

### 5. Comprehensive Hardware Validation Checklist
| Item | Detailed Inspection Criteria | Result |
| :--- | :--- | :--- |
| **Mechanical** | Are the base fixing bolts completely finished with the specified torque? | [ ] Pass / [ ] Fail |
| **Power** | Is the supply voltage range normal and Type 3 grounding completed? | [ ] Pass / [ ] Fail |
| **Cabling** | Are the heavy-duty connector levers between the controller and robot fully locked? | [ ] Pass / [ ] Fail |
| **Interference** | Is there no interference with surrounding structures or cables during tool motion? | [ ] Pass / [ ] Fail |

---
*This guide follows AI-ROBO Solution standard specifications. Unauthorized reproduction and distribution are prohibited.*
**AI-ROBO Technical Guide | www.ai-robo.com**
