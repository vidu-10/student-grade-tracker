package lk.student.gradetracker.entity;

import javax.persistence.*;

@Entity
@Table(name = "referencesequence")
@IdClass(ReferencesequencePK.class)
public class Referencesequence {

    @Id
    @Column(name = "type")
    private String type;

    @Id
    @Column(name = "year")
    private Integer year;
    @Basic
    @Column(name = "lastnumber")
    private Integer lastnumber;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getLastnumber() {
        return lastnumber;
    }

    public void setLastnumber(Integer lastnumber) {
        this.lastnumber = lastnumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Referencesequence that = (Referencesequence) o;

        if (type != null ? !type.equals(that.type) : that.type != null) return false;
        if (year != null ? !year.equals(that.year) : that.year != null) return false;
        if (lastnumber != null ? !lastnumber.equals(that.lastnumber) : that.lastnumber != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = type != null ? type.hashCode() : 0;
        result = 31 * result + (year != null ? year.hashCode() : 0);
        result = 31 * result + (lastnumber != null ? lastnumber.hashCode() : 0);
        return result;
    }
}
