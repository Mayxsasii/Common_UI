import React from "react";
import {
  Layout,
  Button,
  Table,
  Select,
  Modal,
  Spin,
  Tag,
  Avatar,
  Input,
  Card,
  Radio,
} from "antd";
import {
  SearchOutlined,
  LoadingOutlined,
  CloudUploadOutlined,
  FileOutlined,
  FileExcelOutlined,
  CloseOutlined,
  SaveOutlined,
  UploadOutlined,
  CloseCircleOutlined,
  PlusOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
const { Content } = Layout;
import "./BoxCapacity.css";
import { fn_Box_Search } from "./fn_Box_Search";
function Box_Search() {
  const {
    columns,
    NewPopup,
    NewBoxCapacity,
    handleOk,
    handleCancel,
    isModalOpen,
    packingTable,
    ChooseMenu,
    radioselect,
    GenPack,
  } = fn_Box_Search();
  return (
    <Content>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className="TitlePage_h2">Box Capacity</h2>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <table>
          <tr>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}>Ship Factory :</span>
              </div>
            </td>
            <td>
              <div>
                <Select
                  showSearch
                  // value={SL_Unit}
                  style={{
                    width: "200px",
                    display: "block",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                  placeholder="Select Ship Factory"
                  // filterOption={(input, option) =>
                  //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  // }
                  // options={Unit.Search}
                  // onChange={HandleUnit}
                />
              </div>
            </td>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}>Item / Product :</span>
              </div>
            </td>
            <td>
              <div>
                <Select
                  showSearch
                  // value={SL_Process}
                  style={{
                    width: "436px",
                    display: "block",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                  placeholder="Select Item / Product"
                  optionFilterProp="children"
                  // filterOption={(input, option) =>
                  //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  // }
                  // options={Process.Search}
                  // onChange={handleProcess}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}>Lot No :</span>
              </div>
            </td>
            <td>
              <div>
                <Input
                  showSearch
                  // value={SL_Unit}
                  style={{
                    width: "200px",
                    display: "block",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                  placeholder="Lot No From :"
                />
              </div>
            </td>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}>To :</span>
              </div>
            </td>
            <td>
              <div>
                <Input
                  showSearch
                  // value={SL_Unit}
                  style={{
                    width: "200px",
                    display: "block",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                  placeholder="Lot No To :"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}>Packing Date Form :</span>
              </div>
            </td>
            <td>
              <div>
                <Input
                  type="date"
                  showSearch
                  // value={SL_Unit}
                  style={{
                    width: "200px",
                    display: "block",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                  placeholder="Lot No From :"
                />
              </div>
            </td>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}>To :</span>
              </div>
            </td>
            <td>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Input
                  type="date"
                  showSearch
                  // value={SL_Unit}
                  style={{
                    width: "200px",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                  placeholder="Lot No To :"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}>Box No :</span>
              </div>
            </td>
            <td>
              <div>
                <Input
                  showSearch
                  // value={SL_Unit}
                  style={{
                    width: "200px",
                    display: "block",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                  placeholder="Box No :"
                  // filterOption={(input, option) =>
                  //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  // }
                  // options={Unit.Search}
                  // onChange={HandleUnit}
                />
              </div>
            </td>
            <td></td>
          </tr>
          <br></br>
          <tr>
            <td>
              <div style={{ marginLeft: "30px", textAlign: "right" }}>
                <span style={{ fontSize: "14px" }}></span>
              </div>
            </td>
            <td>
              <div>
                <Button
                  type="primary"
                  // icon={loadingSearch ? <LoadingOutlined /> : <SearchOutlined />}
                  icon={<SearchOutlined />}
                  style={{
                    background: "#5AA8F5",
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                  // onClick={() => Search()}
                >
                  Search
                </Button>
                <Button
                  icon={<PlusOutlined />}
                  danger
                  type="primary"
                  style={{
                    background: "#50C878",
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                  onClick={() => NewBoxCapacity()}
                >
                  New
                </Button>
                <Button
                  icon={<CloseOutlined />}
                  danger
                  type="primary"
                  style={{ marginLeft: "10px" }}
                  // onClick={() => Clear()}
                >
                  Reset
                </Button>
              </div>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
      <br></br>

      <Table
        columns={columns}
        style={{ marginTop: "5px" }}
        className="tableSerachBox"
        // dataSource={DataSearch}
        bordered
        pagination={true}
        scroll={{ x: "max-content", y: 350 }}
        // pagination=
      ></Table>
      <Modal
        width={"80%"}
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <Card className="BoxnoMaintain">
            <h3 className="BoxmainName">Box Maintain</h3>
            <Radio.Group
              onChange={ChooseMenu}
              value={radioselect}
              style={{ padding: "10px" }}
            >
              <Radio style={{ marginLeft: "30px" }} value={"Manual"}>
                Pack by Box
              </Radio>
              <Radio style={{ marginLeft: "30px" }} value={"Auto"}>
                Auto Generate Pack
              </Radio>
            </Radio.Group>
            <table>
              <tr>
                <td style={{ textAlign: "right" }}>Item / Product :</td>
                <td>
                  <Select
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "300px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    placeholder="Select Input / Product"
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Ship Factory :</td>
                <td>
                  <Input
                    disabled
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "200px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Box No. :</td>
                <td>
                  <Input
                    disabled
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "200px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
                <td style={{ textAlign: "right" }}>Box Status :</td>
                <td>
                  <Input
                    showSearch
                    // value={SL_Unit}
                    disabled
                    style={{
                      // width: "200px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Packing Date :</td>
                <td>
                  <Input
                    type="date"
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "200px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
                <td style={{ textAlign: "right" }}>Packing Qty :</td>
                <td>
                  <Input
                    showSearch
                    // value={SL_Unit}
                    disabled
                    style={{
                      // width: "200px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    placeholder=""
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Full Box :</td>
                <td>
                  <Input
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "200px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    placeholder="Full Box"
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Packing By :</td>
                <td>
                  <Input
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "200px",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    placeholder="Packing By"
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Remark :</td>
                <td colSpan={3}>
                  <Input
                    fullWidth
                    showSearch
                    // value={SL_Unit}
                    style={{
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                    placeholder="Remark"
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <div style={{ marginLeft: "30px", textAlign: "right" }}>
                    <span style={{ fontSize: "14px" }}></span>
                  </div>
                </td>
                <td>
                  <div>
                    <Button
                      icon={<MedicineBoxOutlined />}
                      type="primary"
                      style={{
                        background: "#3498db",
                        color: "#fff",
                        marginLeft: "10px",
                      }}
                      onClick={() => GenPack("ManaulPack")}
                    >
                      Manual
                    </Button>
                    <Button
                      icon={<MedicineBoxOutlined />}
                      type="primary"
                      style={{ marginLeft: "10px", backgroundColor: "#f4d03f" }}
                      onClick={() => GenPack("AutoPack")}
                    >
                      Auto Pack
                    </Button>
                  </div>
                </td>
                <td></td>
              </tr>
            </table>
          </Card>
          <Table
            columns={packingTable}
            style={{ marginTop: "5px", marginLeft: "10px" }}
            className="tablePacking"
            // dataSource={DataSearch}
            bordered
            pagination={true}
            scroll={{ x: "max-content", y: 350 }}
            // pagination=
          ></Table>
        </div>
        <br />
        {/* <div style={{ display: "flex", alignItems: "flex-start" }}>
          <Card className="ManualPack">
            <table width={"100%"}>
              <tr>
                <td style={{ textAlign: "right" }}>Seq :</td>
                <td>
                  <Input
                    disabled
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "65px",
                      display: "block",
                      marginTop: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
                <td style={{ textAlign: "right" }}>Lot No :</td>
                <td>
                  <Select
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "200px",
                      display: "block",
                      marginTop: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
                <td style={{ textAlign: "right" }}>Remind Qty :</td>
                <td>
                  <Input
                    disabled
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "130px",
                      display: "block",
                      marginTop: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
                <td style={{ textAlign: "right" }}>Packing Qty :</td>
                <td>
                  <Input
                    disabled
                    showSearch
                    // value={SL_Unit}
                    style={{
                      width: "130px",
                      display: "block",
                      marginTop: "5px",
                    }}
                    // filterOption={(input, option) =>
                    //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    // }
                    // options={Unit.Search}
                    // onChange={HandleUnit}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={8}
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      icon={<MedicineBoxOutlined />}
                      type="primary"
                      style={{
                        background: "#3498db",
                        color: "#fff",
                        marginLeft: "10px",
                      }}
                      onClick={() => GenPack("ManualPack")}
                    >
                      Manual
                    </Button>
                    <Button
                      icon={<MedicineBoxOutlined />}
                      type="primary"
                      style={{ marginLeft: "10px", backgroundColor: "#f4d03f" }}
                      onClick={() => GenPack("AutoPack")}
                    >
                      Auto Pack
                    </Button>
                  </div>
                </td>
              </tr>
            </table>
          </Card>
        </div> */}
<div style={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
  <Card  style={{ width: "100%", maxWidth: "1200px", margin: "10px" }}>
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", marginBottom: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ textAlign: "right", width: "100px" }}>Seq :</span>
          <Input
            disabled
            showSearch
            style={{
              width: "65px",
              marginLeft: "10px",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ textAlign: "right", width: "100px" }}>Lot No :</span>
          <Select
            showSearch
            style={{
              width: "200px",
              marginLeft: "10px",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ textAlign: "right", width: "100px" }}>Remind Qty :</span>
          <Input
            disabled
            showSearch
            style={{
              width: "130px",
              marginLeft: "10px",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ textAlign: "right", width: "100px" }}>Packing Qty :</span>
          <Input
            disabled
            showSearch
            style={{
              width: "130px",
              marginLeft: "10px",
            }}
          />
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "10px", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button
            icon={<MedicineBoxOutlined />}
            type="primary"
            style={{
              background: "#3498db",
              color: "#fff",
              marginLeft: "10px",
            }}
            onClick={() => GenPack("ManualPack")}
          >
            Manual
          </Button>
          <Button
            icon={<MedicineBoxOutlined />}
            type="primary"
            style={{ marginLeft: "10px", backgroundColor: "#f4d03f" }}
            onClick={() => GenPack("AutoPack")}
          >
            Auto Pack
          </Button>
        </div>
      </div>
    </div>
  </Card>
</div>
      </Modal>
    </Content>
  );
}

export default Box_Search;
